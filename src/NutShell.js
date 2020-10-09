import React from "react"
import { Route, Redirect } from "react-router-dom"
import { GridLayout } from "./ApplicationView"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"

export const NutShell = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("activeUser")) {
                return (
                    <>
                    <GridLayout />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }}></Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)