menu = [
  {
    category: "",
    items: [
      {
        title: "Café Noir",
        price: 10.0,
      },
      {
        title: "Café Noir",
        price: 10.0,
      },
    ],
  },
];

let a = menu.map((c) => {
  c.items.map((i) => {
    return (
      <>
        <h3>i.title</h3>
        <h4>i.price</h4>
      </>
    );
  });
});
