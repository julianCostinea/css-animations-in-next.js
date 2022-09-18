import React from "react";
import classes from "./PersonalInfo.module.css";
import { IProps } from "../OtherInfo/OtherInfo";

const PersonalInfo: React.FC<IProps> = ({ formData, setFormData }) => {
  return (
    <div className={classes.personalInfoContainer}>
      <input
        className={classes.Input}
        type="text"
        placeholder="INPUT 1"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        className={classes.Input}
        type="text"
        placeholder="INPUT 2"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        className={classes.Input}
        type="text"
        placeholder="INPUT 3"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
};

export default PersonalInfo;
