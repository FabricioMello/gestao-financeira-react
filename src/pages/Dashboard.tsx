import DashboardLayout from "@components/layout/DashboardLayout.tsx";

export default function Categories() {
    return (
        <div className="container mx-auto py-10 space-y-4">
            <div className="rounded-xl border bg-white shadow-md p-6">
                <div className="text-3xl font-semibold tracking-tight pb-5">
                    <h1>📊 Dashboards</h1>
                </div>
                <DashboardLayout />
            </div>
        </div>
    )
}
