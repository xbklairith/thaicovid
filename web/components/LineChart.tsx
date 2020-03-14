import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = ({ data }) => (
    <div style={{ height: '25em' }}>
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            xScale={{ type: "point" }}
            yScale={{ type: "linear", stacked: false, min: 0, max: 'auto' }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 100,
                legendPosition: 'middle'
            }}
            // axisLeft={{
            //     orient: 'left',
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: 'count',
            //     legendOffset: -40,
            //     legendPosition: 'middle'
            // }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}    
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            // legends={[
            //     {
            //         anchor: 'bottom-right',
            //         direction: 'column',
            //         justify: false,
            //         translateX: 100,
            //         translateY: 0,
            //         itemsSpacing: 0,
            //         itemDirection: 'left-to-right',
            //         itemWidth: 80,
            //         itemHeight: 20,
            //         itemOpacity: 0.75,
            //         symbolSize: 12,
            //         symbolShape: 'circle',
            //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemBackground: 'rgba(0, 0, 0, .03)',
            //                     itemOpacity: 1
            //                 }
            //             }
            //         ]
            //     }
            // ]}
        />
    </div>
)

export default LineChart