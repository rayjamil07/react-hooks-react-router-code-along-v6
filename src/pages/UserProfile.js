import NavBar from "../components/NavBar";
import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const params = useParams();
    console.log(params)
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <h1>User Profile</h1>
        </main>
    </>
  )
}

export default UserProfile;