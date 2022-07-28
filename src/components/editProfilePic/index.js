// import { api } from "../../api/api";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export function EditProfilePic() {
//   const [file, setFile] = useState("");

//   const [pic, setPic] = useState({
//     img: "",
//   });


//   function handleFile(e) {
//     setFile(e.target.files[0]);
//   }

//   async function handleUpload() {
//     try {
//       const uploadData = new FormData();

//       uploadData.append("picture", file);
//       const response = await api.post(
//         "http://localhost:4000/upload-image",
//         uploadData
//       );

//       setPic({ ...pic, img: response.data.url });
//       console.log(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <>
//       <form onSubmit={handleUpload}>
//         <input
//           placeholder="Profile Photo"
//           type="file"
//           //   value={form.img} agora nao ta dando certo , depois tirar
//           name="img"
//           onChange={handleFile}
//         />
//       </form>
//       <button type="submit">submit</button>
//     </>
//   );
// }
