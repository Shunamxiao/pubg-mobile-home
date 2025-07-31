'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const mockComments = [
  {
    user: 'ProGamer123',
    avatar: 'https://placehold.co/40x40.png?text=P',
    comment: 'Great guide! The tips on using the new ledge grab mechanic really helped my squad.',
    date: '2 hours ago',
  },
  {
    user: 'SniperQueen',
    avatar: 'https://placehold.co/40x40.png?text=S',
    comment: 'Solid analysis on the M416 vs. Beryl. I\'m sticking with the Beryl for that extra punch.',
    date: '5 hours ago',
  },
];

export function CommentSection() {
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Community Discussion</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40.png?text=U" alt="Your Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <form>
                <Textarea
                  placeholder="Join the discussion..."
                  className="mb-2"
                  rows={3}
                />
                <Button type="submit">Post Comment</Button>
              </form>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {mockComments.map((comment, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src={comment.avatar} alt={comment.user} />
                <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-foreground">{comment.user}</p>
                  <p className="text-xs text-muted-foreground">{comment.date}</p>
                </div>
                <p className="text-muted-foreground">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
