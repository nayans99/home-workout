import { Workout } from "@/model/Workout";
import { AccordionItem, Avatar, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function SingleCategoryComponent({ workout }: { workout: Workout }) {
  return (
    <Link href={`/workout/${workout.id}`}>
      <Card isPressable isHoverable fullWidth>
        <CardBody className="flex justify-center items-center">
          <p>{workout.title}</p>
        </CardBody>
      </Card>
    </Link>
  )
}