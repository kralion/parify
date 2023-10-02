import { Rocket } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { Button } from "../ui/button";

export function HubAlert() {
  const [showAlert, setShowAlert] = useState(false);
  const HandleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };
  return (
    <>
      <div>
        <Alert>
          <Rocket className="h-4 w-4" />
          <AlertTitle>Success !!</AlertTitle>
          <AlertDescription>
            Product added to cart successfully.
          </AlertDescription>
        </Alert>
      </div>
      <Button
        onClick={HandleAddToCart}
        className="w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900"
      >
        Add to Cart
      </Button>
    </>
  );
}
