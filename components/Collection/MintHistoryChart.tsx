import { Spacer } from "common/Spacer";
import DefconZero from "components/Text/DefconZero";
import { COLORS } from "helpers/colorPalette";
import Image from "next/image";
import React from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { DayCount } from "src/types";
import styled from "styled-components";

interface MintHistoryChartProps {
  isLoading?: boolean;
  isError?: boolean;
  mintHistory?: DayCount[];
}

export const MintHistoryChart = ({
  mintHistory,
  isLoading,
  isError,
}: MintHistoryChartProps) => {
  if (isError) {
    return (
      <ChartContainer>
        <Spacer size="70px" />
        <DefconZero size="14px">Could not fetch minting history!</DefconZero>
      </ChartContainer>
    );
  }

  if (isLoading || !mintHistory) {
    return (
      <ChartContainer>
        <Spacer size="60px" />
        <Image
          src="/assets/svg/rings.svg"
          height={75}
          width={75}
          color={COLORS.green}
          alt="Mint history loading icon"
        />
      </ChartContainer>
    );
  }

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={mintHistory ?? []}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={COLORS.whiteLight}
                stopOpacity={0.5}
              />
              <stop
                offset="50%"
                stopColor={COLORS.whiteLight}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fontFamily: "Rubik",
              fontSize: 10,
              fill: COLORS.lightGray,
            }}
            interval={"preserveStartEnd"}
            dataKey="date"
          />
          <YAxis hide />
          <Area
            activeDot={false}
            type="basis"
            dataKey="count"
            stroke={COLORS.white}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  height: 220px;
  width: 360px;
  border: 1px solid white;
  border-radius: 12px;
  margin: 10px 30px;
  padding: 5px;
`;
