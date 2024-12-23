import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
    CardDescription,
} from "@/app/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import { Switch } from "@/app/components/ui/switch"


function ItemCard(props) {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case "High":
                return "bg-red-500 text-white";
            case "Medium":
                return "bg-orange-400 text-white";
            case "Low":
                return "bg-yellow-400 text-white";
            default:
                return "bg-gray-200 text-black";
        }
    };
    return (
        <Card className="transform transition duration-300 hover:scale-105 my-4 mx-2">
            <CardHeader>
                <div className="flex justify-between">
                <div className="flex gap-6">
                    <CardTitle>{props.item.name}</CardTitle>
                    <div
                            className={`w-[90.02px] h-6 rounded-[10px] flex justify-center items-center ${getPriorityColor(
                                props.item.priority
                            )}`}
                        >
                            {props.item.priority}
                        </div>
                </div>
                <div className="flex justify-end">
                    <Switch />
                </div>
                </div>

            </CardHeader>
            <CardContent>
                <p>{props.item.price} LKR ( {props.item.quantity} )</p>
            </CardContent>
            <CardFooter className="gap-x-4">
                <div className="flex justify-end w-full">
                    <div className="flex gap-6">
                        <Pencil
                            className="cursor-pointer text-green-700"
                            onClick={(e) => {
                                e.preventDefault();
                                props.onUpdate(props.item);
                            }}
                        />
                        <Trash
                            className="cursor-pointer text-red-500"
                            onClick={(e) => {
                                e.preventDefault();
                                props.onDelete(props.item.id);
                            }}
                        />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default ItemCard;