import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from "@components/ui/table";
import {Category} from "@/interfaces";
import {useCategories} from "@hooks/categories/useCategories.ts";
import {useUserStore} from "@/features/transactions/store/userStore.ts";
import {Button} from "@components/ui/button.tsx";
import {useDeleteCategory} from "@hooks/categories/useDeleteCategory.ts";

export default function CategoriesLayout() {
    const user = useUserStore((state) => state.user);
    const { categories, loading, error } = useCategories(user?.id ?? 0);
    const { deleteCategoryById, loading: deleteLoading, error: deleteError } = useDeleteCategory();

    if (loading || !user) return <p>Loading...</p>;
    if (error) return <p>Error loading categories: {error.message}</p>;
    if (deleteError) return <p>Error deleting category: {deleteError.message}</p>;

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            deleteCategoryById(id);
        }
    }

    return (
        <Table >
            <TableHeader>
                <TableRow className="bg-muted">
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Orçamento Limite</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categories.map((categories: Category) => (
                    <TableRow key={categories.id} className="even:bg-muted/50">
                        <TableCell>{categories.id}</TableCell>
                        <TableCell className="flex items-center gap-2">
                          <span
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: categories.color }}
                          />{categories.name}
                        </TableCell>
                        <TableCell>{categories.type}</TableCell>
                        <TableCell>{categories.budgetLimit}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleDelete(categories.id)} disabled={deleteLoading}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}