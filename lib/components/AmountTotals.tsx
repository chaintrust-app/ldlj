import * as React from "react";

import styled from "styled-components";
import { IntlShape } from "react-intl";
import { Text } from "./Text";

import { colors } from "../design.config";
import { ProducsWithPrice } from "../utils/invoices";

interface AmountTotalsProps {
  productsWithPrice: ProducsWithPrice[];
  intl: IntlShape;
}

export const AmountTotals = ({
  productsWithPrice,
  intl,
}: AmountTotalsProps) => {
  return (
    <TotalWrapper>
      <TotalCellBorder>
        <Text
          text={intl.formatMessage({ id: "invoicing.issuance.total-HT" })}
          textStyle={{
            color: "cornflower",
            fontFamily: "Poppins",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        />
        <Text
          text={`${productsWithPrice
            .reduce((total, product) => {
              return total + Number(product.price) * product.quantity;
            }, 0)
            .toFixed(2)
            .replace(".00", "")}
      €`}
          textStyle={{ fontWeight: 600, fontFamily: "Poppins", }}
        />
      </TotalCellBorder>
      <TotalCellBorder>
        <Text
          text={intl.formatMessage({ id: "invoicing.issuance.total-VAT" })}
          textStyle={{
            color: "cornflower",
            fontFamily: "Poppins",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        />
        <Text
          text={`${productsWithPrice
            .reduce((total, product) => {
              return (
                total +
                ((Number(product.price) * Number(product.vatRate)) / 100) *
                  product.quantity
              );
            }, 0)
            .toFixed(2)
            .replace(".00", "")}
      €`}
          textStyle={{ fontWeight: 600, fontFamily: "Poppins", }}
        />
      </TotalCellBorder>
      <TotalCell>
        <Text
          text={intl.formatMessage({
            id: "invoicing.issuance.total-tax-included",
          })}
          textStyle={{
            color: "cornflower",
            fontFamily: "Poppins",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        />
        <Text
          text={`${productsWithPrice
            .reduce((total, product) => {
              return (
                total +
                (((Number(product.price) * Number(product.vatRate)) / 100) *
                  product.quantity +
                  Number(product.price) * product.quantity)
              );
            }, 0)
            .toFixed(2)
            .replace(".00", "")}
        €`}
          textStyle={{ fontWeight: 600, fontFamily: "Poppins", }}
        />
      </TotalCell>
    </TotalWrapper>
  );
};

const TotalCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 20rem;
`;

const TotalCellBorder = styled(TotalCell)`
  border-right: 1px solid ${colors.cornflower};
  height: 100%;
`

const TotalWrapper = styled.div`
  max-width: 60rem;
  height: 7.5rem;
  border-radius: 1.25rem;
  border: 1px solid ${colors.cornflower};
  background: ${colors.mist};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
