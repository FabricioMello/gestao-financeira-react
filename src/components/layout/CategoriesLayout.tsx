import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from "@components/ui/table";
import {useEffect, useState} from "react";
import {Category} from "@/interfaces";

export default function CategoriesLayout() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    console.log(categories);

    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories.map((categories: Category) => (
                            <TableRow key={categories.id}>
                                <TableCell>{categories.id}</TableCell>
                                <TableCell>{categories.name}</TableCell>
                                <TableCell>{categories.type}</TableCell>
                                <TableCell>{categories.budgetLimit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}