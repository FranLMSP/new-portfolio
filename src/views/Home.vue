<template>

  <div class="max-w-sm w-full max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-64 md:h-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style="background-image: url('/img/me.png'); background-position: center"
      title="My photo"
    >
    </div>
    <div class="w-full border-r lg:pl-10 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <h2 class="text-gray-900 font-bold text-5xl mb-2">Franco Colmenarez</h2>
        <p class="text-gray-700 text-lg text-base mb-4">Backend and Frontend developer as a job, programmer as a hobbie</p>
        <table
          class="w-full mt-5 text-left text-md table-collapse"
        >
          <tbody class="align-baseline">
            <tr>
              <th class="p-2 w-40 border-t">
                Age:
              </th>
              <td class="p-2 border-t">
                22 years old
              </td>
            </tr>
            <tr>
              <th class="p-2 border-t">
                Nationality:
              </th>
              <td class="p-2 border-t">
                Venezuelan 🇻🇪
              </td>
            </tr>
            <tr>
              <th class="p-2 border-t">
                Location:
              </th>
              <td class="p-2 border-t">
                Ecuador 🇪🇨
              </td>
            </tr>
            <tr>
              <th class="p-2 border-t">
                Experience:
              </th>
              <td class="p-2 border-t">
                <b>4 years</b> of experiencie working on-site and remotely at home 💼
              </td>
            </tr>
            <tr>
              <th class="p-2 border-t">
                Education:
              </th>
              <td class="p-2 border-t">
                <b>7 years</b> in total studying at the university, online courses and self-taught 🎓📖
              </td>
            </tr>
            <tr>
              <th class="p-2 border-t">
                Contact:
              </th>
              <td class="p-2 border-t">
                📧Email: <a style="color: #039be5" href="mailto:info@francoacg.com">info@francoacg.com</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}

</script>

<style>

table.table-collapse td, table.table-collapse th {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

</style>
