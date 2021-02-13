exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('penguins').del()
    .then(function () {
      // Inserts seed entries
      return knex('penguins').insert([
        { id: 1, site_name: 'Acuna Island', site_id: 'ACUN', longitude_epsg_4326: -44.637, latitude_epsg_4326: -60.7612, common_name: 'chinstrap', day: 28, month: 12, year: 1983, season_starting: 1983, penguin_count: 4000, count_type: 'nest', reference: '<strong>Poncet  S. and J. Poncet  </strong><i> 1985</i>. A survey of penguin breeding populations at the South Orkey Islands. British Antarctic Survey Bulletin 68:71-81.' },
        { id: 2, site_name: 'Acuna Island', site_id: 'ACUN', longitude_epsg_4326: -44.637, latitude_epsg_4326: -60.7612, common_name: 'adélie', year: 1993, season_starting: 1993, penguin_count: 2008, count_type: 'nest', reference: '<strong>Poncet  S. and J. Poncet  </strong><i> 1985</i>. A survey of penguin breeding populations at the South Orkey Islands. British Antarctic Survey Bulletin 68:71-81.' },
        { id: 3, site_name: 'Acuna Island', site_id: 'ACUN', longitude_epsg_4326: -44.637, latitude_epsg_4326: -60.7612, common_name: 'adélie', year: 1994, season_starting: 1994, penguin_count: 1920, count_type: 'nest', reference: '<strong>Poncet  S. and J. Poncet  </strong><i> 1985</i>. A survey of penguin breeding populations at the South Orkey Islands. British Antarctic Survey Bulletin 68:71-81.' },
        { id: 4, site_name: 'Acuna Island', site_id: 'ACUN', longitude_epsg_4326: -44.637, latitude_epsg_4326: -60.7612, common_name: 'adélie', year: 2004, season_starting: 2004, penguin_count: 1880, count_type: 'nest', reference: '<strong>Poncet  S. and J. Poncet  </strong><i> 1985</i>. A survey of penguin breeding populations at the South Orkey Islands. British Antarctic Survey Bulletin 68:71-81.' },
        { id: 5, site_name: 'Acuna Island', site_id: 'ACUN', longitude_epsg_4326: -44.637, latitude_epsg_4326: -60.7612, common_name: 'adélie', day: 25, month: 2, year: 2011, season_starting: 2010, penguin_count: 3079, count_type: 'nest', reference: '<strong>Poncet  S. and J. Poncet  </strong><i> 1985</i>. A survey of penguin breeding populations at the South Orkey Islands. British Antarctic Survey Bulletin 68:71-81.' },
        { id: 6, site_name: 'Eda Island', site_id: 'EDA', longitude_epsg_4326: -44.637, latitude_epsg_4326: -60.7612, common_name: 'adélie', day: 25, month: 2, year: 2009, season_starting: 2009, penguin_count: 10000, count_type: 'nest', reference: '<strong>Poncet  S. and J. Poncet  </strong><i> 1985</i>. A survey of penguin breeding populations at the South Orkey Islands. British Antarctic Survey Bulletin 68:71-81.' }
      ])
    })
}
