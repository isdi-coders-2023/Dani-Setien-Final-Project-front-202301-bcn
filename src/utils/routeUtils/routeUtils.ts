interface FrontRouteUtilsStructure {
  homePage: string;
  loginPage: string;
}

export const frontRouteUtils: FrontRouteUtilsStructure = {
  homePage: "/",
  loginPage: "/login",
};

interface BackRouteUtilsStructure {
  loginEndpoint: string;
  paintingsEndpoint: string;
}

export const backRouteUtils: BackRouteUtilsStructure = {
  loginEndpoint: "user/login/",
  paintingsEndpoint: "paintings",
};
