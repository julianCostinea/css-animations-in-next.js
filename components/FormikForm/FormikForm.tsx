import React, { useState } from "react";
import {
  Button,
  CardContent,
  Card,
  Typography,
  TextField,
  Checkbox,
  MenuItem,
  FormControlLabel,
  CheckboxProps,
  FormGroup,
  Box,
} from "@mui/material";
import { Form, Formik, Field, useField, ErrorMessage } from "formik";
import { object, string, number, boolean, array, mixed } from "yup";
import classes from "./OtherInfo.module.css";

interface Details {
  fullName: string;
  initialInvestment?: number;
  investmentRisk: Array<"High" | "Medium" | "Low">;
  commentAboutInvestmentRisk: string;
  dependents?: number;
  acceptedTermsAndConditions: boolean;
}

const FormikForm: React.FC = () => {
  const initialValues: Details = {
    fullName: "",
    initialInvestment: 0,
    investmentRisk: [],
    commentAboutInvestmentRisk: "",
    dependents: -1,
    acceptedTermsAndConditions: false,
  };
  return (
    <Card
      sx={{
        marginTop: "2rem",
      }}
    >
      <CardContent>
        <Typography variant="h4"> Qui esse ea labore ipsum. </Typography>
        <Formik
          validationSchema={object({
            fullName: string().required().min(2).max(100),
            initialInvestment: number().required().min(100),
            dependents: number().required().min(0).max(5),
            acceptedTermsAndConditions: boolean().oneOf([true]),
            investmentRisk: array(
              string().oneOf(["High", "Medium", "Low"])
            ).min(1),
            commentAboutInvestmentRisk: mixed().when("investmentRisk", {
              is: (investmentRisk: string[]) =>
                investmentRisk.find((ir) => ir === "High"),
              then: string().required().min(20).max(100),
              otherwise: string().min(20).max(100),
            }),
          })}
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            return new Promise<void>((resolve) => {
              setTimeout(() => {
                console.log(values);
                console.log(formikHelpers);
                return resolve();
              }, 2000);
            });
          }}
        >
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    variant="standard"
                    name="fullName"
                    as={TextField}
                    label="Full Name"
                  />

                  <p style={{ color: "red" }}>
                    <ErrorMessage name="fullName" />
                  </p>
                  {/* <p style={{color: "red"}}>{touched.fullName && errors.fullName ? errors.fullName : null}</p> */}
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    variant="standard"
                    as={TextField}
                    name="initialInvestment"
                    type="number"
                    label="Initial Investment"
                  />
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="initialInvestment" />
                  </p>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <MyCheckbox name="investmentRisk" value="High" label="High" />
                  <MyCheckbox
                    name="investmentRisk"
                    value="Medium"
                    label="Medium"
                  />
                  <MyCheckbox name="investmentRisk" value="Low" label="Low" />
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="investmentRisk" />
                  </p>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    variant="standard"
                    name="commentAboutInvestmentRisk"
                    as={TextField}
                    multiline
                    rows={3}
                    rowsmax={10}
                    label="Comment About Investment Risk"
                  />
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="commentAboutInvestmentRisk" />
                  </p>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    variant="standard"
                    name="dependents"
                    select
                    as={TextField}
                    label="dependents"
                  >
                    <MenuItem value={-1}>Select a value</MenuItem>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Field>
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="dependents" />
                  </p>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <MyCheckbox
                    name="acceptedTermsAndConditions"
                    label="Accept Terms and Cond."
                  />
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="acceptedTermsAndConditions" />
                  </p>
                </FormGroup>
              </Box>
              <Button type="submit" disabled={isSubmitting || isValidating}>
                Submit
              </Button>
              <pre>{JSON.stringify(errors, null, 4)}</pre>
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default FormikForm;

export interface MyCheckboxProps extends CheckboxProps {
  name: string;
  label?: string;
  value?: string | number;
}

export function MyCheckbox(props: MyCheckboxProps) {
  const [field] = useField({
    name: props.name,
    type: "checkbox",
    value: props.value,
  });
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={props.label}
    />
  );
}
