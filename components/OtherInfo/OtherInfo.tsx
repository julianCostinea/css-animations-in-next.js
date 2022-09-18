import React, {useState} from "react";
import classes from "./OtherInfo.module.css";
import {IState} from '../MultiStepForm/MultiStepForm';


export interface IProps {
  formData: IState,
  setFormData: React.Dispatch<React.SetStateAction<IState>>
}

const OtherInfo: React.FC<IProps> = ({ formData, setFormData }) => {
  return (
    <div className={classes.OtherInfoContainer}>
      <input
        type="text"
        placeholder="INPUT 1"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="INPUT 2"
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
    </div>
  );
};

export default OtherInfo;
