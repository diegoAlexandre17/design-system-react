import * as React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface IconsChartItem {
  icon: React.ReactNode;
  color: string;
  count: number;
  title: string;
  textColor: string;
}

interface IconsChartCardProps {
  data: IconsChartItem[];
  title: string;
  classNameCardContainer?: string;
}

const IconsChartCard = ({
  data,
  title,
  classNameCardContainer,
}: IconsChartCardProps) => {
  return (
    <Card className={`py-2 gap-2 ${classNameCardContainer}`}>
      <CardHeader>
        <Text variant="card-title-graph">{title}</Text>
      </CardHeader>
      <CardContent>
        {data.map((item, index) => (
          <React.Fragment key={`key-${item.title}`}>
            {index > 0 && <Separator className="my-3" />}
            <div className="flex gap-2.5">
              <Avatar size="xl">
                <AvatarFallback className={`rounded-xl ${item.color}`}>
                  {item.icon}
                </AvatarFallback>
              </Avatar>
              <div>
                <Text variant="p" className={`font-semibold ${item.textColor}`}>
                  {item.count}
                </Text>
                <Text variant='small'>{item.title}</Text>
              </div>
            </div>
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default IconsChartCard;
