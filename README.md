## React Leaderboard

### Summary

I began working on this project to practice using React, Typescript and SCSS in a configurable and reusable component. This component create a leaderboard that can be customized via props and custom styles.

### Example

```javascript
<Leaderboard
    className="wrapper"
    title={"Most Kills"}
    subtitle={"Do your best to avoid these players..."}
    headings={["Name", "Score"]}
    rows={[
      ["Will", 1005],
      ["Bill", 934],
      ["Jim", 767],
      ["Tony", 711],
      ["Bob", 456],
      ["George", 409]
    ]}
    limit={3}
  />
```