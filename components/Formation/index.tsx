import useSWR from "swr";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Input } from "common/Input";
import { SectionContainer } from "common/Container";
import { FormationSlider } from "components/Formation/FormationSlider";
import { Data } from "helpers/types";
import fetcher from "helpers/fetcher";
import { Flex } from "common/Container/styles";
import {
  FormationContainer,
  FormationSection,
} from "components/Formation/styles";

export const Formation = () => {
  const [searchKeyword, setSearchKeyWord] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useSWR<Data>("/api/formation", fetcher);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(e.target.value);
  };

  useEffect(() => {
    setFilteredData(
      data?.filter((item: Data) =>
        item.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }, [searchKeyword, data]);

  return (
    <FormationSection>
      <SectionContainer padding="6rem 0" textAlign="start">
        <Fade triggerOnce>
          <FormationContainer>
            <h2>The formation</h2>
            <Flex className="input-container">
              <Input placeholder="Search Asset" onChange={handleChange} />
            </Flex>
            {filteredData?.map((item: Data, index: number) => {
              return <FormationSlider data={item} key={index} />;
            })}
          </FormationContainer>
        </Fade>
      </SectionContainer>
    </FormationSection>
  );
};
