import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">TripCraft</CardTitle>
          <CardDescription className="text-base">
            AI-powered travel itinerary generation. Your perfect trip, planned in
            seconds.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Button size="lg" className="w-full">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            Try Without Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
