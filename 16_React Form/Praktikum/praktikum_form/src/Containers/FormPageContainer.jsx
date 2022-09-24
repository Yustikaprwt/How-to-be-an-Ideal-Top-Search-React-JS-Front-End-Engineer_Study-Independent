import React from 'react';
import { useState, useRef } from "react";

function FormPageContainer () {
    const baseData = {
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        harapan: "",
    }
    const baseError = {
        nama: "",
        email: "",
        noHandphone: "",
    }
    const [data, setData] = useState(baseData);
    const [errorMassage, setErrorMassage] = useState(baseError);
    const regexName = /^[a-zA-Z\s]*$/;
    const regexNoHandphone = /^[0-9]*$/;
    const regexEmail = /^\w+@[A-Za-z_]+?\.[a-zA-Z]{2,3}$/;
    const suratKesungguhan = useRef(null);
    const [radioIT, setRadioIT] = useState(false);
    const [radioNonIT, setRadioNonIT] = useState(false);
    
    const handleInput = e =>{
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...data,
            [name]:value
        })

        if (name === "nama") {
            if (!regexName.test(value)) {
                setErrorMassage({ ...errorMassage, nama : "Nama Harus Berupa Huruf" })
            }
            else{
                setErrorMassage("")
            }
        }
        if (name === "email") {
            if (!regexEmail.test(value)) {
                setErrorMassage({ ...errorMassage, email : "Email Tidak Sesuai" })
            }
            else{
                setErrorMassage("")
            }
        }
        if (name === "noHandphone") {
            if (!regexNoHandphone.test(value)) {
                setErrorMassage({ ...errorMassage, noHandphone : "No Handphone Tidak Sesuai" })
            }
            else {
                setErrorMassage("")
            }
        }
        
        console.log("data", data)
    }

    const handleSubmit = (event) => {
        if (errorMassage === "") {
            alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
        }
        else {
            alert("Data Pendaftar Tidak Sesuai")
        }
        // event.preventDefault()
    }

    const handleRadioButton = (event) => {
        if (event.target.value === "IT"){
            setRadioIT(!radioIT);
            setRadioNonIT(false);
            setData({
                ...data,
                pendidikan:"IT"
            })
        }
        else if (event.target.value === "NonIT"){
            setRadioNonIT(!radioNonIT);
            setRadioIT(false);
            setData({
                ...data,
                pendidikan:"NonIT"
            })
        }
    }

    const handleSelect = (event) => {
        setData({
            ...data,
            kelas: event.target.value
        })
        
    }

    const resetData = () => {
        setData(baseData);
        setErrorMassage("");
    }

    return (
        <div style={{margin: "10px 100px"}}>
                <h1 style={{textAlign: "center", color: "grey"}}><strong>Pendaftaran Peserta Coding Bootcamp</strong></h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='d-flex flex-column justify-content-start'>
                        Nama Lengkap:
                        <br/>
                        <input 
                        type="text" 
                        name="nama"
                        required 
                        placeholder='Contoh: Yustika Perwita Sari'
                        onChange={handleInput}
                        value={data.nama}
                        style={{width: "100%", height: 25, borderRadius: 4, marginBottom: 10}}
                        />
                {errorMassage.nama && <p style={{width: "100%", color: "red"}}>{errorMassage.nama}</p>}
                </label>

                </div>
                <label className={"inputText d-flex flex-column justify-content-start"}>
                    Email:
                    <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder='Contoh: yustika@gmail.com'
                    onChange={handleInput}
                    value={data.email}
                    style={{width: "100%", height: 25, borderRadius: 4, marginBottom: 10}}
                    />
                {errorMassage.email && <p style={{width: "100%", color: "red"}}>{errorMassage.email}</p>}
                </label>
                
                <label className={"inputText d-flex flex-column justify-content-start"}>
                    No Handphone:
                    <input 
                    minLength="9"
                    maxLength="14"
                    type="text"
                    name="noHandphone" 
                    required
                    placeholder='Contoh: 081234567890'
                    onChange={handleInput}
                    value={data.noHandphone}
                    style={{width: "100%", height: 25, borderRadius: 4, marginBottom: 10}}                    
                  />
                {errorMassage.noHandphone && <p style={{width: "100%", color: "red"}}>{errorMassage.noHandphone}</p>}
                </label>
               
                <label>
                    Latar Belakang Pendidikan:
                    <br></br>
                    <input
                    type="radio" 
                    // name="pendidikan"
                    required 
                    value="IT"
                    checked={radioIT}
                    onChange={handleInput}
                    onClick={handleRadioButton}
                    />IT
                    <input 
                    type="radio"
                    // name="pendidikan"
                    value="NonIT"
                    onChange={handleInput}
                    checked={radioNonIT}
                    onClick={handleRadioButton}
                    />Non IT
                </label><br></br>

                <label >Kelas Coding yang Dipilih:</label>
                <select name="kelas"  style={{width: "100%", height: 25, borderRadius: 4, marginBottom: 10}} onChange={handleSelect}  >
                    <option value="">--Pilih Salah Satu Program--</option>
                    <option value="Backend">Coding Backend with Golang</option>
                    <option value="Frontend">Coding Frontend with ReactJS</option>
                    <option value="Fullstack">Fullstack Developer</option>
                </select><br></br>

                <label>
                    Foto Surat Kesungguhan:
                    <input 
                    type="file" 
                    refs={suratKesungguhan}
                    style={{width: "100%", marginBottom: 10}}
                    />
                </label><br></br>

                <label className='d-flex flex-column justify-content-start'> 
                    Harapan Untuk Coding Bootcamp Ini:
                    <textarea name="harapan" value={data.harapan} onChange={handleInput} style={{width: "100%", height: "100px", borderRadius: 10, padding: 5}}></textarea>
                </label><br></br>

                <input type="submit" value="Submit" style={{color: "white",backgroundColor: "#3a811d", borderRadius: 5, width: "10%", border: "none", height: 25, marginRight: 5}}/>
                <button onClick={resetData} style={{color: "white",backgroundColor: "#ed3833", borderRadius: 5, width: "10%", border: "none", height: 25}}>Reset</button>
            </form>
        </div>
    )
}

export default FormPageContainer;