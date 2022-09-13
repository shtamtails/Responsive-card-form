export interface ISizing {
  fullWidth?: boolean;
  width?: number | string;
  height?: number | string;
  py?: number | string;
  px?: number | string;
  mx?: number | string;
  my?: number | string;
  pt?: number | string;
  pb?: number | string;
  pr?: number | string;
  pl?: number | string;
  mt?: number | string;
  mb?: number | string;
  mr?: number | string;
  ml?: number | string;
}

export const getContainerSizing = (props: ISizing) => {
  return {
    margin: ` ${typeof props.my === "number" ? `${props.my}px` : props.my || 0} ${
      typeof props.mx === "number" ? `${props.mx}px` : props.mx || 0
    } `,
    padding: ` ${typeof props.py === "number" ? `${props.py}px` : props.py || 0} ${
      typeof props.px === "number" ? `${props.px}px` : props.px || 0
    }`,
    paddingTop: `${typeof props.pt === "number" ? `${props.pt}px` : props.pt}`,
    paddingBottom: `${typeof props.pb === "number" ? `${props.pb}px` : props.pb}`,
    paddingRight: `${typeof props.pr === "number" ? `${props.pr}px` : props.pr}`,
    paddingLeft: `${typeof props.pl === "number" ? `${props.pl}px` : props.pl}`,
    marginTop: `${typeof props.mt === "number" ? `${props.mt}px` : props.mt}`,
    marginBottom: `${typeof props.mb === "number" ? `${props.mb}px` : props.mb}`,
    marginRight: `${typeof props.mr === "number" ? `${props.mr}px` : props.mr}`,
    marginLeft: `${typeof props.ml === "number" ? `${props.ml}px` : props.ml}`,
  };
};

export const getElementSizing = (props: ISizing) => {
  return {
    width: `${typeof props.width === "number" ? `${props.width}px` : props.width}`,
    height: `${typeof props.height === "number" ? `${props.height}px` : props.height}`,
  };
};
