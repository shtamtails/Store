import { ContentCard } from "components/Business/Content/ContentCard";
import React from "react";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <>
      <div className="container">
        <div className="section-title">Category name</div>
        <div className="content-items">
          <Link to="/item/1">
            <ContentCard image="https://sun9-88.userapi.com/impf/-jaAiUeUc76De2Mazp1jxHrtdIS1dV7aVnUn4g/2YZdmu0m4FY.jpg?size=354x330&quality=96&sign=205bb7da4f68dfd4974784388ff3b5f6&type=album" />
          </Link>
          <ContentCard image="https://sun9-77.userapi.com/impf/o-XIiOiw4h1bfAlB1mF65AawJaPMk5ETHFZEDQ/8r4c-GlTrzs.jpg?size=354x330&quality=96&sign=e034032e71bf60086779fd85549b7e1b&type=album" />
          <ContentCard image="https://sun9-40.userapi.com/impf/MPEsMaTIVHg5u8LBm6l9AR8cjW9mtiLG0245ZA/Yzn4TulRE7w.jpg?size=354x330&quality=96&sign=f9ac7c03cbc7121004e2c3c77c45b217&type=album" />
          <ContentCard image="https://sun9-80.userapi.com/impf/0hWGKhyTQAiPrlBPPYZje1WSEZTRoptI-vZqSg/fL2DkCNDuH4.jpg?size=354x330&quality=96&sign=54ea3d30e9a46140e0cd105e897cd049&type=album" />
          <ContentCard image="https://sun9-88.userapi.com/impf/-jaAiUeUc76De2Mazp1jxHrtdIS1dV7aVnUn4g/2YZdmu0m4FY.jpg?size=354x330&quality=96&sign=205bb7da4f68dfd4974784388ff3b5f6&type=album" />
          <ContentCard image="https://sun9-40.userapi.com/impf/MPEsMaTIVHg5u8LBm6l9AR8cjW9mtiLG0245ZA/Yzn4TulRE7w.jpg?size=354x330&quality=96&sign=f9ac7c03cbc7121004e2c3c77c45b217&type=album" />
        </div>
      </div>
    </>
  );
};
