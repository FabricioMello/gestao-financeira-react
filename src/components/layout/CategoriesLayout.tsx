import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from "@components/ui/table";
import {Category} from "@/interfaces";
import {useCategories} from "@hooks/categories/useCategories.ts";
import {useUserStore} from "@/features/transactions/store/userStore.ts";
import {useDeleteCategory} from "@hooks/categories/useDeleteCategory.ts";
import { ConfirmDeleteDialog } from "@/components/layout/ConfirmDeleteDialog";
import { Loader2 } from "lucide-react";

export default function CategoriesLayout() {
    const user = useUserStore((state) => state.user);
    const { categories, loading, error } = useCategories(user?.id ?? 0);
    const { deleteCategoryById, loading: deleteLoading, error: deleteError } = useDeleteCategory();

    if (loading || !user) return <Loader2 className="h-5 w-5 animate-spin text-primary" />;
    if (error) return <p>Error loading categories: {error.message}</p>;
    if (deleteError) return <p>Error deleting category: {deleteError.message}</p>;

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
                            <ConfirmDeleteDialog
                                onConfirm={() => deleteCategoryById(categories.id)}
                                loading={deleteLoading}
                                title="Excluir Categoria"
                                description="Tem certeza que deseja excluir esta categoria?"
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}