<template>
    <div class="calendar">
        <br>
        <h1 class="title">Calendar</h1>
        <br>
        <iframe src="https://calendar.google.com/calendar/embed?src=en.th%23holiday%40group.v.calendar.google.com&ctz=Indian%2FChristmas" style="width:70%; height:600px; display: block; margin-left: auto; margin-right: auto;"  frameborder="0" scrolling="no"></iframe>
    </div>
</template>

<script>
export default {
  name: 'Calendar'
}
</script>

<style scoped>
  .calendar {
    padding-top: 12%;
    padding-bottom: 5%;
    width: 63%;
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    text-align: left;
    color: #777777;
  }

</style>
