import PreloaderTwo from "../common/PreloaderTwo/PreloaderTwo";
import {Suspense} from "react";
import * as React from "react";

export const withSuspense = Component => {
	return <Suspense fallback={<PreloaderTwo/>}><Component/></Suspense>;
}