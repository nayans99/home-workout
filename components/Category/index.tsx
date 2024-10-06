"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import SingleCategoryComponent from "./SingleCategoryComponent";
import yogaWorkoutData from "./YogaCategoryData";

export default function CategoryListComponent() {

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <div className="mx-15 flex flex-col gap-5">
            {yogaWorkoutData.map(data => (
                        <SingleCategoryComponent workout={data} />
                    ))}
             {/* <Accordion>
                <AccordionItem
                    key="1"
                    aria-label="Chung Miller"
                    startContent={
                        <Avatar
                            isBordered
                            color="success"
                            radius="lg"
                            src="https://cdn-icons-png.flaticon.com/512/4028/4028535.png"
                        />
                        }
                    subtitle="4 unread messages"
                    title="Chung Miller"
                >
                    {defaultContent}
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Janelle Lenard"
                    startContent={
                    <Avatar
                        isBordered
                        color="success"
                        radius="lg"
                        src="https://cdn-icons-png.flaticon.com/512/4028/4028535.png"
                    />
                    }
                    subtitle="3 incompleted steps"
                    title="Janelle Lenard"
                >
                    {defaultContent}
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="Zoey Lang"
                    startContent={
                        <Avatar
                            isBordered
                            color="success"
                            radius="lg"
                            src="https://cdn-icons-png.flaticon.com/512/4028/4028535.png"
                        />
                        }
                    subtitle={
                    <p className="flex">
                        2 issues to<span className="text-primary ml-1">fix now</span>
                    </p>
                    }
                    title="Zoey Lang"
                >
                    {defaultContent}
                </AccordionItem>
            </Accordion> */}
        </div>
            
    )
} 