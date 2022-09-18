import React from "react";
import classes from "./SignUpInfo.module.css";
import {IProps} from '../OtherInfo/OtherInfo';


const SignUpInfo: React.FC<IProps> = ({formData, setFormData}) => {
  return (
    <div className={classes.signUpContainer}>
      <input
        type="text"
        placeholder="INPUT 1"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="INPUT 2"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="INPUT 3"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
};

export default SignUpInfo;
