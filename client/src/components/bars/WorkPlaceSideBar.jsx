// "use client";
// import React, { useState } from "react";
// import styles from "./workPlaceSideBar.module.css";
// import Link from "next/link";
// import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const menuItems = [
//     { title: "Anasayfa", link: "/isletme" },
//     { title: "Randevular", link: "/isletme/randevu" },
//     {
//       title: "Project",
//       link: "",
//       subMenu: [
//         { title: "Project Create", link: "/admin/project/create" },
//         { title: "Project List", link: "/admin/project/list" },
//       ],
//     }
//   ];
//   const [isOpen, setIsOpen] = useState(false);
//   const [openStates, setOpenStates] = useState(menuItems.map(() => false));

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleSubMenu = (index) => {
//     const newOpenStates = [...openStates];
//     newOpenStates[index] = !newOpenStates[index];
//     setOpenStates(newOpenStates);
//   };
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navbarContainer}>
//         <div className={styles.menuIcon} onClick={toggleMenu}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>
//         <ul
//           className={`${
//             isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu
//           }`}
//         >
//           {menuItems.map((menuItem, index) => (
//             <li className={styles.navItem} key={index}>
//               <Link
//                 href={menuItem.link}
//                 className={`${styles.navLinks} ${
//                   menuItem.subMenu ? styles.drop : ""
//                 } ${openStates[index] ? styles.active : ""}`}
//               >
//                 <div className={styles.titleLink}>{menuItem.title}</div>
//                 {menuItem.subMenu && (
//                   <span
//                     className={`${styles.dropBtn} ${
//                       openStates[index] ? styles.rotate : ""
//                     }`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       toggleSubMenu(index);
//                     }}
//                   >
//                     <FaArrowRight />
//                   </span>
//                 )}
//               </Link>
//               {menuItem.subMenu && (
//                 <ul
//                   className={`${styles.dropdownMenu} ${
//                     openStates[index] ? styles.active : ""
//                   }`}
//                 >
//                   {menuItem.subMenu.map((subItem, subIndex) => (
//                     <li className={styles.dropdownItem} key={subIndex}>
//                       <Link href={subItem.link} className={styles.navLinks}>
//                         {subItem.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;