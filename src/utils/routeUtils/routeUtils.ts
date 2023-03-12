interface FrontRouteUtilsStructure {
  homePage: string;
}

export const frontRouteUtils: FrontRouteUtilsStructure = {
  homePage: "/",
};

interface BackRouteUtilsStructure {
  loginEndpoint: string;
  paintingsEndpoint: string;
}

export const backRouteUtils: BackRouteUtilsStructure = {
  loginEndpoint: "user/login/",
  paintingsEndpoint: "/paintings",
};
