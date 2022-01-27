import useSWR from "swr";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Input } from "common/Input";
import { SectionContainer } from "common/Container";
import { FormationSlider } from "components/Formation/FormationSlider";
import { FormationContainer } from "components/Formation/styles";
import { Data } from "helpers/types";
import fetcher from "helpers/fetcher";

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
    <SectionContainer padding="6rem 0" maxWidth="75rem" textAlign="start">
      <Fade triggerOnce>
        <FormationContainer>
          <h2>The formation</h2>
          <Input placeholder="Search Asset" onChange={handleChange} />
          {filteredData?.map((item: Data, index: number) => {
            return <FormationSlider data={item} key={index} />;
          })}
        </FormationContainer>
      </Fade>
    </SectionContainer>
  );
};
