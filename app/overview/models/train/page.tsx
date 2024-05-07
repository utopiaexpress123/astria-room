import TrainModelZone from "@/components/TrainModelZone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { CloseIcon } from "@/components/ui/close-icon";

export default async function Index() {
  return (
    <div className="w-full mx-auto">
      <div
        id="train-model-container"
        className="flex flex-1 flex-col px-2 relative "
      >
        <Link href="/overview" className="text-sm w-fit">
          <Button variant={"ghost"} className="text-xs absolute top-2 right-2" size="sm">
            <CloseIcon/>
          </Button>
        </Link>
        <Card className="shadow-2xl bg-stone-100">
          <CardHeader>
            <CardTitle className="mt-6 text-4xl font-extrabold">Let's create a model!</CardTitle>
            <CardDescription>
              Choose a name, type, and upload some photos to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <TrainModelZone />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




