'use strict';
// Only used to finish already-started v1 rounds without changing their questions.
window.JUJIAN_LEGACY=(()=>{const previous={
  meaning:'询问对方有没有过某种经历',
  learning:[
    {id:'l1',zh:'你有没有尝试过瑜伽？',answers:['Have you ever tried yoga?'],hint:'尝试某项活动：try + 活动名称\n瑜伽：yoga\ntry 的过去分词：tried'},
    {id:'l2',zh:'你有没有独自旅行过？',answers:['Have you ever travelled alone?','Have you ever traveled alone?'],hint:'独自做某事：动词 + alone\n旅行：travel\ntravel 的过去分词：travelled / traveled'},
    {id:'l3',zh:'你有没有误过飞机？',answers:['Have you ever missed a flight?'],hint:'误了某班交通工具：miss + a flight / a train / a bus\nmiss 的过去分词：missed'},
    {id:'l4',zh:'你有没有去过日本？',answers:['Have you ever been to Japan?'],hint:'曾经去过某地：have / has been to + 地点\n当前问句中的表达：been to + 地点\n日本：Japan'},
    {id:'l5',zh:'你有没有吃过泰国菜？',answers:['Have you ever eaten Thai food?','Have you ever tried Thai food?'],hint:'吃某种食物：eat + 食物\n泰国菜：Thai food\neat 的过去分词：eaten'}
  ],
  review:[
    {id:'r1',zh:'你有没有尝试过滑雪？',answers:['Have you ever tried skiing?'],hint:'尝试某项活动：try + 活动名称\n滑雪这项活动：skiing\ntry 的过去分词：tried'},
    {id:'r2',zh:'你有没有独自去电影院看过电影？',answers:['Have you ever been to the cinema alone?','Have you ever gone to the movies alone?','Have you ever gone to the cinema alone?','Have you ever been to the movies alone?'],hint:'去电影院看电影：go to the cinema / go to the movies\n独自：alone\ngo 的过去分词：gone\n去过电影院的经历：have / has been to the cinema'},
    {id:'r3',zh:'你有没有错过末班公交车？',answers:['Have you ever missed the last bus?'],hint:'错过某班车：miss + 车次\n末班公交车：the last bus\nmiss 的过去分词：missed'},
    {id:'r4',zh:'你有没有去过海边？',answers:['Have you ever been to the seaside?','Have you ever been to the beach?'],hint:'曾经去过某地：have / has been to + 地点\n海边：the seaside / the beach'},
    {id:'r5',zh:'你有没有吃过自己种的蔬菜？',answers:['Have you ever eaten vegetables you grew yourself?','Have you ever eaten vegetables that you grew yourself?','Have you ever eaten vegetables you have grown yourself?','Have you ever eaten vegetables you’ve grown yourself?'],hint:'吃：eat；过去分词：eaten\n自己种的蔬菜：vegetables you grew yourself\n修饰关系：you grew yourself 放在 vegetables 后面'}
  ]
};previous.entry={id:'entry',zh:'你有没有独自旅行过？',answers:['Have you ever travelled alone?','Have you ever traveled alone?'],hint:''};return previous;})();
