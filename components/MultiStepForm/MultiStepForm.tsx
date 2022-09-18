import React, { useState } from "react";
import OtherInfo from "../OtherInfo/OtherInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SignUpInfo from "../SignUpInfo/SignUpInfo";
import classes from "./MultiStepForm.module.css";

export interface IState {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  username: string;
  nationality: string;
  other: string;
}

const MultiStepForm: React.FC = () => {
  const [page, setPage] = useState(0);
  const formTitles = ["STEP 1", "STEP 2", "STEP 3"];

  const [formData, setFormData] = useState<IState>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  // const numbersArray = [1, 2, 3, 4];

  // const produceExceptSelf = (array: number[]): number[] => {
  //   return array.map((element, index1) => {
  //     return array.reduce((acumulator, currentItem, index2) => {
  //       return acumulator * (index1 === index2 ? 1 : currentItem);
  //     }, 1);
  //   });
  // };

  // const resultArray = produceExceptSelf(numbersArray);
  // console.log(resultArray);

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    }
    if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
    if (page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className={classes.form}>
      <div className={classes.progressBar}>
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.header}>
          <h1>{formTitles[page]}</h1>
        </div>
        <div className={classes.body}>{pageDisplay()}</div>
        <div className={classes.footer}>
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((prevPage) => prevPage - 1);
            }}
          >
            Prev
          </button>
          <button
            // disabled={page === formTitles.length - 1}
            onClick={() => {
              if (page === formTitles.length - 1) {
                alert("Form Submitted");
              } else {
                setPage((prevPage) => prevPage + 1);
              }
            }}
          >
            {page === formTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
