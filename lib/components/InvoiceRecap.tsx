import * as React from "react";

import styled from "styled-components";
import { IntlShape } from "react-intl";

import { colors } from "../design.config";
import { InvoiceRecap } from "../utils/invoices";
import { Text } from "./Text";

interface InvoiceRecapInfoProps {
  invoiceRecap: InvoiceRecap;
  intl: IntlShape;
}

export const InvoiceRecapInfo = ({
  invoiceRecap,
  intl,
}: InvoiceRecapInfoProps) => {
  return (
    <RecapWrapper>
      <Line>
        <span>
          <Text
            text={intl.formatMessage({
              id: "invoicing.issuance.preview.seller",
            })}
            textStyle={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 2,
            }}
          />
          <Text
            text={invoiceRecap.seller}
            textStyle={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 2,
            }}
          />
        </span>
        <span>
          <Text
            text={intl.formatMessage({
              id: "invoicing.issuance.preview.invoice-date",
            })}
            textStyle={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 2,
            }}
          />
          <Text
            text={invoiceRecap.invoiceDate}
            textStyle={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 2,
            }}
          />
        </span>
      </Line>
      <Line>
        <span>
          <Text
            text={intl.formatMessage({
              id: "invoicing.issuance.preview.buyer",
            })}
            textStyle={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 2,
            }}
          />
          <Text
            text={invoiceRecap.buyer}
            textStyle={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 2,
            }}
          />
        </span>
        <span />
      </Line>
    </RecapWrapper>
  );
};

const RecapWrapper = styled.div`
  background-color: ${colors.cornflower};
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
