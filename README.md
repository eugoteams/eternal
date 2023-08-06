<!-- @format -->

## Api

The eternal api exposes two end points:

- [GET](/api/harekrishna) - A simple get will fetch you all the chapters of bhagwat geeta.
- [POST](/api/gita) - A post request on this endpoint with body {"chapter":1...18,"slok":some_slok_num} will get you the slok in that chapter.If sloak is not provided it will fetch you all the sloaks in the chapter.
