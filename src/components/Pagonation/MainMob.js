import React from 'react';
import PaginationMob from "./PaginationMob";
import {imgMob} from "../../utils/utils";
import ImagePageMob from "./ImagePageMob";

const MainMob = () => {
    return (
        <div>
            <PaginationMob
                data={imgMob}
                RenderComponent={ImagePageMob}
                pageLimit={Math.round(imgMob.length / 3)}
                dataLimit={1}
            />
        </div>
    );
};

export default MainMob;