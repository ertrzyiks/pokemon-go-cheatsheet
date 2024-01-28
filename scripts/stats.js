// curl https://ertrzyiks.piwik.pro/api/analytics/v1/query/

async function getToken() {
  const res = await fetch("https://ertrzyiks.piwik.pro/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.PIWIK_CLIENT_ID,
      client_secret: process.env.PIWIK_CLIENT_SECRET,
    }),
  });

  const data = await res.json();

  return data.access_token;
}

async function load({ token }) {
  const res = await fetch(
    "https://ertrzyiks.piwik.pro/api/analytics/v1/query/",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date_from: "2024-01-28",
        date_to: "2024-01-28",
        website_id: "d87e7fd1-4fcb-41a1-bccf-f2c965619fea",
        offset: 0,
        limit: 10,
        columns: [
          {
            column_id: "timestamp",
            transformation_id: "to_start_of_month",
          },
          {
            column_id: "page_views",
          },
          {
            column_id: "bounce_rate",
          },
          {
            column_id: "session_total_time",
            transformation_id: "average",
          },
        ],
        order_by: [[1, "desc"]],
        filters: null,
        metric_filters: null,
      }),
    }
  );

  const data = await res.json();

  return data.data.map((columns) => {
    const row = {};

    columns.forEach((value, index) => {
      const column = data.meta.columns[index];
      row[column] = value;
    });

    return row;
  });
}

async function main() {
  const token = await getToken();
  const data = await load({ token });

  console.table(data);
}

main();
