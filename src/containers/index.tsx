import React, { useState } from "react";
// import clsx from "clsx";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// // import NumberFormat from "react-number-format";
// import copy from "copy-to-clipboard";
// // import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import "./index.scss";
// // import Tag from "../tag";

// type Props = {
//   title?: string;
//   type?: string;
//   placeHolder?: string;
//   errorMsg?: string;
//   endAdornmentStyleClass?: string;
//   startIcon?: React.ReactNode;
//   endIcon?: React.ReactNode;
//   disabled?: any;
//   customclasses: any;
//   error?: string;
//   boxShadow?: string;
//   copyButton?: string;
//   data?: { id: number; label: string; image: any }[];
//   closeIcon?: string;
// };

// const InputFields = ({
//   title,
//   type,
//   errorMsg,
//   startIcon,
//   endIcon,
//   placeHolder,
//   disabled,
//   error,
//   boxShadow,
//   copyButton,
//   data,
//   closeIcon,
//   customclasses: {
//     textfield_input_box_shadow,
//     textfield_input_red_border,
//     textfield_input_disabled,
//     error_msg,
//     start_adornment_color,
//     start_adornment_border,
//   },
// }: Props) => {
//   const [value, setValue] = useState("");
//   const [copyText, setCopyText] = useState("");

//   const handleCopyToClipboard = () => {
//     copy(copyText);
//     alert("copied !!");
//   };
//   return (
//     <div className={clsx("inputs_cont")}>
//       <div className="title">{title}</div>
//       <div
//         className={clsx(
//           "input-container",
//           disabled === "true" && "textfield-input-disabled",
//           error === "true" && "textfield-input-red-border",
//           boxShadow === "true" && "textfield-input-box-shadow"
//         )}
//       >
//         <div
//           className={clsx(
//             "start-adornment",
//             type === "website" && "start-adornment-border",
//             type === "sale amount" && "start-adornment-color"
//           )}
//         >
//           {startIcon}
//         </div>

//         {/* {type === "sale amount" && (
//           // <NumberFormat thousandSeparator={true} placeholder="1,000" />
//         )} */}
//         {/* {type === "number" ? (
//           <PhoneInput
//             placeholder="+1 (555) 000-0000"
//             defaultCountry="US"
//             value={value}
//             onChange={() => setValue(value)}
//             className="phoneInput"
//           />
//         ) : type === "tags" ? (
//           <Tag data={data} closeIcon="true" fontStyling="false" />
//         ) : (
//           <input
//             type={type}
//             placeholder={placeHolder}
//             disabled={disabled && disabled}
//           />
//         )} */}

//         <div className={clsx("end-adornment", error === "true" && "error-msg")}>
//           {endIcon && endIcon}
//         </div>
//         {copyButton === "true" && (
//           <button className="copy-button" onClick={handleCopyToClipboard}>
//             {/* <ContentCopyIcon sx={{ fontSize: "medium" }} /> */}
//             Copy
//           </button>
//         )}
//       </div>
//       <div className={clsx("warning-msg", error === "true" && "error_msg")}>
//         {errorMsg}
//       </div>
//       {/* {type === "tags" && <Tag data={data} />} */}
//     </div>
//   );
// };

// export default InputFields;