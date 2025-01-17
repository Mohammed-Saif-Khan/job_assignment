import { Input } from "@/components/ui/input";
import { PaymentCard } from "@/utils/constant";
import Image from "next/image";

const LoginSection = () => {
  return (
    <div className="bg-green-900 h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="my-8">
          <h1 className="text-4xl font-extrabold text-center text-white">
            Card Payment
          </h1>
          <h1 className="text-4xl font-extrabold text-center text-white">
            Checkout Form
          </h1>
        </div>
        <div className="grid grid-cols md:grid-cols-2 bg-white p-8 rounded-3xl my-8 shadow-md">
          <div className="flex flex-col items-center justify-center">
            <Image src="/Vector.png" width={100} height={100} alt="error" />
            <div>
              <h2 className="text-2xl font-extrabold text-green-900">
                Payment gateway
              </h2>
              <p className="text-[#A3AED0] text-xs text-center my-2">
                Enter School Location Detail
              </p>
            </div>
          </div>
          <div>
            <p className="text-black text-2xl font-semibold">
              Complete registration payment
            </p>
            <p className="text-black text-base my-2 font-semibold">
              Personal Details
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs mb-2 text-[#2B3674] font-bold">
                  Address Line
                </p>
                <Input placeholder="P.o.Box 1223 placeholder:text-[#A3AED0]" />
              </div>
              <div>
                <p className="text-xs mb-2 text-[#2B3674] font-bold">City</p>
                <Input placeholder="Arusha" />
              </div>
              <div>
                <p className="text-xs mb-2 text-[#2B3674] font-bold">State</p>
                <Input placeholder="Arusha,Tanzania" />
              </div>
              <div>
                <p className="text-xs mb-2 text-[#2B3674] font-bold">
                  Postal Code
                </p>
                <Input placeholder="9090" />
              </div>
            </div>
            <div className="my-4">
              <h1 className="text-base font-semibold">Payment methods</h1>
              <div className="flex items-center gap-4 my-3 flex-wrap">
                {PaymentCard.map((item, index) => (
                  <Image
                    src={item?.cardImage}
                    width={50}
                    height={50}
                    alt="error"
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-base font-semibold">Card details</h1>
              <div>
                <p className="text-xs my-2 text-[#2B3674] font-bold">
                  Cardholder's name
                </p>
                <Input placeholder="9090" />
              </div>
              <div>
                <p className="text-xs my-2 text-[#2B3674] font-bold">
                  Card number
                </p>
                <Input placeholder="9090" />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs my-2 text-[#2B3674] font-bold">
                    Expirity
                  </p>
                  <Input placeholder="Expire" />
                </div>
                <div>
                  <p className="text-xs my-2 text-[#2B3674] font-bold">CVC</p>
                  <Input placeholder="CVC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginSection;
