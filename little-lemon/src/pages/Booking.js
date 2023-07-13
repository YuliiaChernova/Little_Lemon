import Layout from "../components/Layout";

const Booking = () => {
  return (
    <Layout>
    <main>
        <form>
          <input type="text" id="name" name="name" placeholder="Name*" />
          <input type="text" id="phone" name="phone" placeholder="Phone*" />
          <input type="text" id="email" name="email" placeholder="Email*" />
          <div className="dateTime">
            <input type="text" id="date" name="date" placeholder="Booking date*" />
            <input type="text" id="time" name="time" placeholder="Time*" />
          </div>
          <input type="text" id="adults" name="adults" placeholder="Number of adults*" />
          <input type="text" id="children" name="children" placeholder="Number of children*" />
          <button className="primaryButton">Book table</button>
        </form>
      </main>
  </Layout>
  )
};

export default Booking;