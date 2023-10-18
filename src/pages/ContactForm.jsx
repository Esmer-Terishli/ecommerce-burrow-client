import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import "../assets/styles/_ContactForm.style.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CartContext } from "../cartContext";
import CheckoutContact from "../components/CheckoutContact/CheckoutContact";
import { Link } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";

const contactFormSchema = yup.object({
  firstname: yup.string().trim().min(3).max(15).required(),
  lastname: yup.string().trim().min(3).max(15).required(),
  email: yup
    .string()
    .email()
    .trim()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "email is invalid"
    )
    .required(),
  address: yup.string().trim().min(3).max(15).required(),
  newsletter: yup
    .boolean()
    .required()
    .oneOf([true], "Billing address must be clicked"),
  message: yup.string().trim().min(10).max(100).required(),
  country: yup
    .string()
    .oneOf(
      [
        "usa",
        "canada",
        "uk",
        "germany",
        "france",
        "spain",
        "italy",
        "japan",
        "tr",
        "canada",
      ],
      "Invalid country selection"
    )
    .required("Country is required"),
  city: yup.string().trim().min(3).max(15).required(),
  postal: yup.string().trim().min(5).required(),

  creditcard: yup.string().trim().length(16).required(),
  billingzip: yup.string().trim().min(5).required(),

  month: yup
    .string()
    .oneOf(
      ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      "Invalid month selection"
    )
    .required("Month is required"),

  year: yup
    .string()
    .oneOf(
      [
        "85",
        "86",
        "87",
        "88",
        "89",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ],
      "Invalid year selection"
    )
    .required("Year is required"),

  cvc: yup.string().trim().length(3).required(),
  billingname: yup.string().trim().min(3).max(15).required(),

  billingcountry: yup
    .string()
    .oneOf(
      [
        "usa",
        "canada",
        "uk",
        "germany",
        "france",
        "spain",
        "italy",
        "japan",
        "tr",
        "canada",
      ],
      "Invalid country selection"
    )
    .required("Country is required"),

  billingaddress: yup.string().trim().min(3).max(15).required(),
  billingcity: yup.string().trim().min(3).max(15).required(),
  billingcode: yup.string().trim().min(5).required(),
});

const ContactForm = () => {
  const { cart, setCart } = useContext(CartContext);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const findTotalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      country: "",
      city: "",
      postal: "",
      newsletter: false,
      message: "",
      creditcard: "",
      billingzip: "",
      month: "",
      year: "",
      cvc: "",
      billingname: "",
      billingcountry: "",
      billingaddress: "",
      billingcity: "",
      billingcode: "",
    },

    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = (values) => {
    console.log(values);

    reset();

    setCart([]);

    setIsSuccessModalOpen(true);
  };

  console.log(formState.errors);

  return (
    <div className="container mx-auto my-40">
      <div className="checkout md:flex md:justify-between">
        <div className="form-section w-full md:w-1/2 lg:w-2/3 mr-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-auto rounded-md shadow-lg p-8"
          >
            <div className="customer-form">
              <h3 className="text-2xl font-bold mb-4">Customer Info</h3>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="firstname"
                  className="block text-gray-700 font-semibold"
                >
                  First Name
                </label>
                <input
                  id="firstname"
                  {...register("firstname")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="John"
                />
                {formState.errors.firstname && (
                  <small className="text-red-500">
                    {formState.errors.firstname.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="lastname"
                  className="block text-gray-700 font-semibold"
                >
                  Last Name
                </label>
                <input
                  id="lastname"
                  {...register("lastname")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="Smith"
                />
                {formState.errors.lastname && (
                  <small className="text-red-500">
                    {formState.errors.lastname.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-full xl:w-1/4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="johnsm@gmail.com"
                />
                {formState.errors.email && (
                  <small className="text-red-500">
                    {formState.errors.email.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold"
                >
                  Address
                </label>
                <input
                  id="address"
                  {...register("address")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="122 Example St"
                />
                {formState.errors.address && (
                  <small className="text-red-500">
                    {formState.errors.address.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-semibold"
                >
                  Select Country
                </label>
                <select
                  id="country"
                  {...register("country")}
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                >
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                  <option value="italy">Italy</option>
                  <option value="japan">Japan</option>
                  <option value="tr">Turkey</option>
                  <option value="canada">Canada</option>
                </select>
                {formState.errors.country && (
                  <small className="text-red-500">
                    {formState.errors.country.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-semibold"
                >
                  Town/City
                </label>
                <input
                  id="city"
                  {...register("city")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="Las Vegas"
                />
                {formState.errors.city && (
                  <small className="text-red-500">
                    {formState.errors.city.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="postal"
                  className="block text-gray-700 font-semibold"
                >
                  Zip/Postal
                </label>
                <input
                  id="postal"
                  {...register("postal")}
                  type="number"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="00000"
                />
                {formState.errors.postal && (
                  <small className="text-red-500">
                    {formState.errors.postal.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-full xl:w-1/4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register("message")}
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="Message"
                ></textarea>
                {formState.errors.message && (
                  <small className="text-red-500">
                    {formState.errors.message.message}
                  </small>
                )}
              </div>
            </div>

            <div className="py-8">
              <hr />
            </div>

            <div className="customer-form">
              <h3 className="text-2xl font-bold mb-4">Payment Info</h3>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="creditcard"
                  className="block text-gray-700 font-semibold"
                >
                  Credit Card Number
                </label>
                <input
                  id="creditcard"
                  {...register("creditcard")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="0000111100001111"
                />
                {formState.errors.creditcard && (
                  <small className="text-red-500">
                    {formState.errors.creditcard.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="billingzip"
                  className="block text-gray-700 font-semibold"
                >
                  Billing Zip
                </label>
                <input
                  id="billingzip"
                  {...register("billingzip")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="Enter Billing Zip Code"
                />
                {formState.errors.billingzip && (
                  <small className="text-red-500">
                    {formState.errors.billingzip.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="month"
                  className="block text-gray-700 font-semibold"
                >
                  Select Month
                </label>
                <select
                  id="month"
                  {...register("month")}
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                >
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                {formState.errors.month && (
                  <small className="text-red-500">
                    {formState.errors.month.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="year"
                  className="block text-gray-700 font-semibold"
                >
                  Select Year
                </label>
                <select
                  id="year"
                  {...register("year")}
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                >
                  <option value="85">1985</option>
                  <option value="86">1986</option>
                  <option value="87">1987</option>
                  <option value="88">1988</option>
                  <option value="89">1989</option>
                  <option value="90">1990</option>
                  <option value="91">1991</option>
                  <option value="92">1992</option>
                  <option value="93">1993</option>
                  <option value="94">1994</option>
                  <option value="95">1995</option>
                  <option value="96">1996</option>
                  <option value="97">1997</option>
                  <option value="98">1998</option>
                  <option value="99">1999</option>
                  <option value="00">2000</option>
                  <option value="01">2001</option>
                  <option value="02">2002</option>
                  <option value="03">2003</option>
                  <option value="04">2004</option>
                  <option value="05">2005</option>
                  <option value="06">2006</option>
                  <option value="07">2007</option>
                  <option value="08">2008</option>
                  <option value="09">2009</option>
                  <option value="10">2010</option>
                  <option value="11">2011</option>
                  <option value="12">2012</option>
                  <option value="13">2013</option>
                  <option value="14">2014</option>
                  <option value="15">2015</option>
                  <option value="16">2016</option>
                  <option value="17">2017</option>
                  <option value="18">2018</option>
                  <option value="19">2019</option>
                  <option value="20">2020</option>
                  <option value="21">2021</option>
                  <option value="22">2022</option>
                  <option value="23">2023</option>
                </select>
                {formState.errors.year && (
                  <small className="text-red-500">
                    {formState.errors.year.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="cvc"
                  className="block text-gray-700 font-semibold"
                >
                  CVC
                </label>
                <input
                  id="cvc"
                  {...register("cvc")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="123"
                />
                {formState.errors.cvc && (
                  <small className="text-red-500">
                    {formState.errors.cvc.message}
                  </small>
                )}
              </div>
            </div>

            <div className="py-8">
              <hr />
            </div>

            <div className="customer-form">
              <h3 className="text-2xl font-bold mb-4">Billing Address</h3>

              <div className="form-control mb-4 flex flex-col">
                <label
                  htmlFor="newsletter"
                  className="block text-gray-700 font-semibold"
                >
                  Billing address same as shipping
                </label>
                <input
                  type="checkbox"
                  id="newsletter"
                  {...register("newsletter")}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                {formState.errors.newsletter && (
                  <small className="text-red-500">
                    {formState.errors.newsletter.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="billingname"
                  className="block text-gray-700 font-semibold"
                >
                  Billing Name
                </label>
                <input
                  id="billingname"
                  {...register("billingname")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="Billing Name"
                />
                {formState.errors.billingname && (
                  <small className="text-red-500">
                    {formState.errors.billingname.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="billingcountry"
                  className="block text-gray-700 font-semibold"
                >
                  Select Country
                </label>
                <select
                  id="billingcountry"
                  {...register("billingcountry")}
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                >
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                  <option value="italy">Italy</option>
                  <option value="japan">Japan</option>
                  <option value="tr">Turkey</option>
                  <option value="canada">Canada</option>
                </select>
                {formState.errors.billingcountry && (
                  <small className="text-red-500">
                    {formState.errors.billingcountry.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="billingaddress"
                  className="block text-gray-700 font-semibold"
                >
                  Address
                </label>
                <input
                  id="billingaddress"
                  {...register("billingaddress")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="122 Example St"
                />
                {formState.errors.billingaddress && (
                  <small className="text-red-500">
                    {formState.errors.billingaddress.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="billingcity"
                  className="block text-gray-700 font-semibold"
                >
                  City
                </label>
                <input
                  id="billingcity"
                  {...register("billingcity")}
                  type="text"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="Las Vegas"
                />
                {formState.errors.billingcity && (
                  <small className="text-red-500">
                    {formState.errors.billingcity.message}
                  </small>
                )}
              </div>

              <div className="form-control mb-4 inline-flex flex-col w-1/3 xl:w-1/4">
                <label
                  htmlFor="billingcode"
                  className="block text-gray-700 font-semibold"
                >
                  Zip
                </label>
                <input
                  id="billingcode"
                  {...register("billingcode")}
                  type="number"
                  className="py-2 px-3 border rounded-lg focus:ring focus:border-blue-300"
                  placeholder="00000"
                />
                {formState.errors.billingcode && (
                  <small className="text-red-500">
                    {formState.errors.billingcode.message}
                  </small>
                )}
              </div>
            </div>

            <div className="btn-container py-6">
              <button className="btn submit text-white font-semibold text-sm lg:text-base py-2 px-2 lg:py-3 lg:px-4 rounded-lg mr-2">
                Complete Checkout and Pay
              </button>
              <button
                className="btn reset text-white font-semibold text-sm lg:text-base py-2 px-4 lg:py-3 lg:px-8 rounded-lg"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className="checkout-cart w-full md:w-1/2 lg:w-1/3 h-full rounded-md shadow-lg py-8 mt-16 md:mt-0">
          <h1 className="font-bold text-2xl text-center">Current Cart</h1>
          <div className="return-cart text-center font-bold py-3">
            <Link to="/cart">Return to Cart</Link>
          </div>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="">
                <CheckoutContact
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              </li>
            ))}
          </ul>

          <div className="discount-code text-center my-16">
            <h1 className="text-xl font-bold mb-4">DISCOUNT CODE</h1>
            <div className="flex justify-center">
              <input
                type="text"
                className="py-2 px-3 border rounded-l-lg border-r-0"
                placeholder="Code"
              />
              <button className="py-2 px-4 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600">
                Apply
              </button>
            </div>
          </div>

          <div className="text-center text-2xl">
            <span>Total: </span>{" "}
            <span className="font-bold ">{findTotalPrice}$</span>
          </div>
        </div>
      </div>

      {isSuccessModalOpen && (
        <SuccessModal
          isOpen={isSuccessModalOpen}
          successMessage="Success"
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ContactForm;
