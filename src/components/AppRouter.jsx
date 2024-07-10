import React, { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { MAIN_ROUTE, NEWS_ROUTE } from "../utils/consts";
import { publicRoutes } from "../routes";
import '../styles/transitions.scss'
import ScrollToTop from "./ScrollToTop";

const AppRouter = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
            >
                <Routes location={location}>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={Component} />
                    ))}
                    <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default AppRouter;