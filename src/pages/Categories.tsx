import CategoriesLayout from "@components/layout/CategoriesLayout.tsx";

export default function Categories() {
    return (
        <div className="container mx-auto py-10 space-y-4">
            <div className="text-center space-y-1">
                <h1 className="text-3xl font-semibold tracking-tight">Categorias</h1>
            </div>

            <div className="rounded-xl border bg-white shadow-md p-6">
                <CategoriesLayout />
            </div>
        </div>
    )
}

