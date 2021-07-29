import PreloaderTwo from "../common/PreloaderTwo/PreloaderTwo";
import {Suspense} from "react";
import * as React from "react";

//React.Suspense for components which React.Lazy
export const withSuspense = Component => {
	return <Suspense fallback={<PreloaderTwo/>}><Component/></Suspense>;
}