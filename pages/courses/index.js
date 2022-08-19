import payload from "payload";

function Courses({ page }) {
  return <></>;
}

// This gets called on every request
export async function getServerSideProps() {
  const pageQuery = await payload.find({
    collection: "posts",
    // where: {
    //   slug: {
    //     equals: slug,
    //   },
    // },
  });

  return {
    props: {
      page: pageQuery.docs,
    },
  };
}

export default Courses;
