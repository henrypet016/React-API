// doesntt workkkk

import React from 'react'
import {render} from 'react-dom';
import { TestWithMockData } from './Te';

const pretendInfo = [
    {
        "id": 1,
        "first_name": "Henry",
        "last_name": "Pettitt",
        "email": "h.pettitt@elifesciences.org",
        "age": 17
      }, {
        "id": 2,
        "first_name": "Tim",
        "last_name": "Cook",
        "email": "timcook@icloud.com",
        "age": 37
      },
]

test("List renders successfully", () => {
    render(<TestWithMockData data={pretendInfo} />)
    expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
})