"use client"

import axios from "axios";
import Link from "next/link";
import {Hero} from "@/components/Hero";
import {About} from "@/components/About";


const Home = () => {
    return (
        <>

            <Hero />
            <About />
        </>
    );
};

export default Home;