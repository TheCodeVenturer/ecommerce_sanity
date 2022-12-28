import { loadStripe } from "@stripe/stripe-js";
let stripePromise;
const stripe_publishable_key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const getStripe = ()=>{
    if(!stripePromise){
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
        
        // console.log(typeof process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
}

export default getStripe;