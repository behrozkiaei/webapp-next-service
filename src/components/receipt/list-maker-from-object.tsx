import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useIsMdDown from "../effects/isMdDown";
import {
  responseValueToFaKey,
  translateKey,
} from "@/utils/heplers/bill.helper";

import Divider from "@mui/material/Divider";
export interface ReceiptDatailPropInterface {
  obj: any;
  ignoredKey?: Array<String>;
  fontSize?: number;
}
export const ListMakerFromObject: React.FC<any> = ({
  obj,
  fontSize,
  ignoredKey = [],
}) => {
  const isMdDown = useIsMdDown();
  return (
    <List sx={{ maxHeight: 700, overflow: "auto" ,width:"100%"}}>
      {Object.keys(obj).map((key) => (
        <div key={key} style={{width:"100%"}}>
          {ignoredKey.indexOf(key) == -1 &&
            (typeof obj[key as keyof any] == "string"   || typeof obj[key as keyof any] == "number" )&& (
              <>
                <ListItem
                  key={Math.random()}
                  className={`d-flex  justify-space-between align-center ${
                    isMdDown ? "" : "mt-1"
                  }  full-width`}
                  sx ={{width : "100%"}}
                >
                  <>
                    {(typeof obj[key as keyof any] == "string" || typeof obj[key as keyof any] == "number") && (
                      <>
                        <div
                          style={{
                            fontSize: fontSize + "em" ?? "0.95em",
                            textAlign: "right",
                          }}
                        >
                          {translateKey(key)}
                        </div>
                        <div
                          style={{
                            fontSize: fontSize * 0.9 + "em" ?? "0.75em",
                          }}
                        >
                          {responseValueToFaKey(key, obj[key as keyof any])}
                        </div>
                      </>
                    )}
                  </>
                </ListItem>
                  <Divider />
              </>
            )}
        </div>
      ))}
    </List>
  );
};
