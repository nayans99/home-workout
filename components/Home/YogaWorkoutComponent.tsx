import { Avatar, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

export default function YogaWorkoutComponent() {

const redirectYogaCategory = () => {
    redirect("/category/yoga")
}

    return (
        <div>
            <Link href = "/category/yoga">
            <Card isPressable isHoverable fullWidth shadow="none" className="bg-gray-200">
                <CardBody>
                    <div className="flex justify-center items-center">
                        <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <p className="ml-5"> Yoga Workout </p>
                    </div>
                </CardBody>
            </Card>
            </Link>
        </div>
    )
}